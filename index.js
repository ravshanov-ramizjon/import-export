import {Card} from "./components/Card.js"
import { User } from "./components/User.js"
import { Shop } from "./components/Shop.js"
import { Forum } from "./components/Forum.js"
import { movies } from "./db/movies.js"
import { users } from "./db/users.js"
import { productsArr } from "./db/products.js"
import { people } from "./db/forum.js"
import { reload } from "./helpers/reload.js"



const container = document.querySelector('.container')
const tbody = document.querySelector('#userTableBody')
const productsDiv = document.querySelector('.products');
const count = document.querySelector('h1 span');
const firstButton = document.querySelector('.showProducts');
const secondButton = document.querySelector('.showAllProducts');
const cartDiv = document.querySelector('.cart');
const box = document.querySelector('.box');


reload(movies, container, Card)
reload(users, tbody, User)