# GitHub Profile Viewer

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/nameisvinod/github-viewer/blob/master/LICENSE)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://githubprofileviewer.netlify.app/?u=nameisvinod)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![made-with-python](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://reactjs.org/)

<!-- ![GitHub stars](https://img.shields.io/github/stars/nameisvinod/github-viewer?style=plastic) -->

## About

This is a react app to view github profiles with the help of github graphql api. Search a user by github username and get key information about the account.

View live [site](https://githubprofileviewer.netlify.app/?u=nameisvinod)

## Live Demo

![Github Profile Viewer Demo](demo/demo.gif)

## Need

This is my first project using React. It gives an essential overview of a github user. The site makes it really easy to see the popular projects and languages used by a github user.

## How it works

Search any user in github by their username. Github GraphQL query is used to fetch the user data with the username as input. The repos info contain the first 100 repos sorted on the stars. Only the repos owned by the user are listed.

## Authors

- **Vinod Kumar S** - _Initial work_ - [nameisvinod](https://github.com/nameisvinod)

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration

## TODO

1. [x] Implement Recent searchs
2. [x] Implement filter repo
3. [x] Add one more data chart
4. [x] Sorted column highlight
5. [ ] Add loader for user search
6. [x] Add user not found page
