import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import ListBlog from './components/ListBlogs'
export default [
    { path: "/", component: ShowBlog },
    { path: "/add", component: AddBlog },
    { path: "/list", component: ListBlog }
]