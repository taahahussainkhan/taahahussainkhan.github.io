import React ,{ useState, useEffect } from 'react'
import './Work.css'

export default function Navbar() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch('https://api.github.com/users/taahahussainkhan/repos');
            const data = await response.json();
            setRepos(data);
        };

        fetchRepos();
    }, []);
    return (
        <div className='work'>
            <h1>Projects</h1>
            <ul className='projects'>
                <li className="box"><h2>Project 1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ducimus quia sint odit! Perferendis iste omnis maiores nam illo unde non hic suscipit. Fuga natus odit facilis ratione magnam voluptate.</p>
                    <button className='btn'>Repo Link</button>
                </li>
                <li className="box"><h2>Project 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ducimus quia sint odit! Perferendis iste omnis maiores nam illo unde non hic suscipit. Fuga natus odit facilis ratione magnam voluptate.</p>
                    <button className='btn'>Repo Link</button>
                </li>
                {repos.length >= 25 && ( 
                    <li className="box">
                        <h2>{repos[23].name}</h2> {/* Displaying the 2nd repository */}
                        <p>{repos[23].description}</p>
                        <a href={repos[23].html_url} className='btn'>Repo Link</a>
                    </li>
                )}
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid incidunt temporibus sed dicta, obcaecati, magni soluta ipsa facilis tempore nobis delectus maxime veritatis ipsam corporis eum consequuntur, nesciunt dolores dolorum unde. Dolorem qui esse minus similique ducimus fuga labore officia eveniet cum. Nostrum ullam at dignissimos praesentium quae sequi, pariatur deleniti! Asperiores, libero suscipit quisquam autem ex aliquam vel tenetur voluptatem nesciunt officiis laborum laboriosam minus praesentium voluptatibus! Eum dolore dignissimos ducimus architecto repellendus quis quae officiis. Quibusdam, voluptas! Exercitationem fugit dolores pariatur nisi corrupti maxime non soluta, est ipsa illum distinctio aliquam unde, ducimus aspernatur voluptatem, ullam inventore!</p>
        </div>
    )
}
