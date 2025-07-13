import React from 'react';

const Dashboard = () => {
    return (
       <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-teal-400 to-green-400">
            <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-lg text-center">
                <div className="flex flex-col items-center mb-6">
                    <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Welcome to Your Dashboard!</h1>
                    <p className="text-gray-600">You have successfully logged in.</p>
                </div>
                <div className="mt-10">
                    <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Thank you PLP Community for this far!</h2>
                        <p className="text-white text-lg">
                            Your dedication and teamwork have made this journey possible.<br />
                            Keep pushing forward and achieving greatness together!
                        </p>
                        <div className="mt-6 flex justify-center">
                            <span className="inline-block bg-white text-teal-600 font-semibold px-4 py-2 rounded-full shadow">
                                🚀 PLP Community Rocks!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-gray-500 text-sm">Thank you for using our app. Have a productive day!</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;