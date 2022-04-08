import { useState, useEffect } from 'react';

function useCurrentSong() {
    const [song, setSong] = useState(null);

    async function getCurrentSong() {
        const apiKey = process.env.REACT_APP_SPOTIFY_KEY; // MAKE SURE THIS ONLY HAS PERMISSION TO user-read-current-playing and user-read-playback-position
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            }
        });
        const json = await response.json()
        return json;
    }

    function makeReadable(data) {
        const readableObject = {
            name: null,
            artists: null,
            image: null,
            length_ms: null,
            currentTimestamp_ms: null,
            isPlaying: null,
        }

        readableObject.name = data.item.name;
        readableObject.artists = data.item.artists.reduce((artistsFormatted, currValue, currIndex, array) => {
            const currentArtist = currValue.name;
            const isFirstItem = () => currIndex = 0;
            const isLastItem = () => currIndex === array.length - 1;

            if (isFirstItem()) {
                return currentArtist;
            } else if (isLastItem()) {
                return artistsFormatted + currentArtist; 
            } else {
                return artistsFormatted + `, ${currentArtist}`
            }

        }, '');
        readableObject.image = data.item.album.images[1].url;
        readableObject.length_ms = data.item.duration_ms;
        readableObject.currentTimestamp_ms = data.progress_ms;
        readableObject.isPlaying = data.is_playing;

        return readableObject;
    }

    useEffect(() => {
        let functionFinished = true;

        async function getSong() {
            const songData = await getCurrentSong();
            const song = makeReadable(songData);
            console.log(song)
            setSong(song);
        }

        getSong();
        const intervalId = setInterval(async () => {
            if (functionFinished) {
                functionFinished = false;
                await getSong();
                functionFinished = true;
            }
        }, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return song;
}

function SongTimeline() {

}

function SongPicture() {

}

function SongTitleAuthor() {

}

function SpotifyCurrentlyPlaying() {
    const song = useCurrentSong();
    return (
        <div className="current-playing">
            <SongPicture />
            <div className="information">
                <div>Currently playing</div>
                <SongTitleAuthor />
                <SongTimeline />
            </div>
        </div>
    )
}

export default SpotifyCurrentlyPlaying;