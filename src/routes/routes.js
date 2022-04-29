import { lazy } from "react";
// import {QuienSoy, HomeDreams, Skills, BlogPage, Contactame} from "../dreams/page/index";

const HomeDreams = lazy(() => 
    import(/* webpackChunkName: "HomeDreams"*/'../dreams/page/home/HomeDreams'))
const QuienSoy = lazy(() => 
    import(/* webpackChunkName: "QuienSoy"*/'../dreams/page/yo/QuienSoy'))
const BlogPage = lazy(() => 
    import(/* webpackChunkName: "BlogPage"*/'../dreams/page/blog/BlogPage'))
const Skills = lazy(() => 
    import(/* webpackChunkName: "Skills"*/'../dreams/page/skills/Skills'))
const Contactame = lazy(() => 
    import(/* webpackChunkName: "Contactame"*/'../dreams/page/contactame/Contactame'))

export const routes = [
    {
        path:'/home',
        Element: HomeDreams,
        name: 'Home'
    },
    {
        path:'/quiensoy',
        Element: QuienSoy,
        name: 'Quien Soy'
    },
    {
        path:'/blog',
        Element: BlogPage,
        name: 'Blog'
    },
    {
        path:'/skills',
        Element: Skills,
        name: 'Skill'
    },
    {
        path:'/contactame',
        Element: Contactame,
        name: 'Contactar'
    }
]