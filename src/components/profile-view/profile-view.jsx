import React, { useEffect, useState } from 'react';
import Form from ' react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from "react-bootstrap-don";
import './profile-view.scss';
import axios from 'axios';
import FavoriteMovies from './favorite-movies';

export function ProfileView({ movies, onUpdateUserInfo }) {
    const [user, setUser] = useState({})
}

const favoriteMovieList = movies.filter((movies) => { });

const getUser = () => { }

const handleSubmit = (e) => { }

const removeFav = (id) => { }

const handleUpdate = (e) => { };

useEffect(() => { }, [])

return (
    <div>
        <UserInfo name={user.Username} email={user.Email} />
        <FavoriteMovies favoriteMovieList={favoriteMovieList} />
        <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
            <h2>Want to change some info?</h2>
            <label>Username:</label>
            <input
                type='text'
                name='Username'
                defaultValue={user.Username}
                onChange={e => handleUpdate(e)} />
            <label>Password</label>
            <input
                type='password'
                name='password'
                defaultValue={user.Password}
                onChange={e => handleUpdate(e)} />
            <label>Email address</label>
            <input
                type='email'
                name='email'
                defaultValue={user.Email}
                onChange={e => handleUpdate(e.target.value)} />
            <button variant='primary' type='submit'>
                Update
            </button>
        </form>
    </div>
);

