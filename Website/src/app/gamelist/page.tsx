'use client'

import React, { useState } from 'react'

// Sample game data
const games = [
    { id: 1, title: "Epic Quest", genre: "RPG", releaseDate: "2023-05-15", imageUrl: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Space Odyssey", genre: "Strategy", releaseDate: "2023-08-22", imageUrl: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Neon Racer", genre: "Racing", releaseDate: "2023-03-10", imageUrl: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Mystic Legends", genre: "MMORPG", releaseDate: "2023-11-05", imageUrl: "/placeholder.svg?height=200&width=300" },
    { id: 5, title: "Zombie Survival", genre: "Action", releaseDate: "2023-07-30", imageUrl: "/placeholder.svg?height=200&width=300" },
    { id: 6, title: "Puzzle Master", genre: "Puzzle", releaseDate: "2023-09-18", imageUrl: "/placeholder.svg?height=200&width=300" },
]

export default function Gamelist() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('All')

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGenre === 'All' || game.genre === selectedGenre)
    )

    const genres = ['All', ...new Set(games.map(game => game.genre))]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Our Published Games
                </h1>

                <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
                    <input
                        type="text"
                        placeholder="Search games..."
                        className="w-full md:w-64 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 md:mb-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="w-full md:w-auto px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        {genres.map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGames.map(game => (
                        <div key={game.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 border border-gray-700">
                            <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 text-purple-400">{game.title}</h2>
                                <p className="text-gray-400 mb-2">Genre: {game.genre}</p>
                                <p className="text-gray-400">Release Date: {game.releaseDate}</p>
                                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 ease-in-out">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredGames.length === 0 && (
                    <p className="text-center text-gray-400 mt-8">No games found matching your criteria.</p>
                )}
            </div>
        </div>
    )
}