// Copyright 2025 Conrad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Solutions: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-gray-300">
            <NavBar />

            <main className="relative px-6 py-12">
                <section className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-6">Our Solutions</h1>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Discover how ChitChat's AI solutions can transform your business operations and customer interactions.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Solutions;

