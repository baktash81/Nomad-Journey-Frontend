import React, { useEffect, useState } from 'react';
import {Box, Divider, IconButton, Rating, Stack, Typography,Grid,Button,Container, InputAdornment, TextField} from "@mui/material";
import {Item} from "semantic-ui-react";
import Highlighter from "react-highlight-words";
import "../UserPanel/RightBar/MyAnnouncement.css";
import "./generalPostsTab.css";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import axios from "axios";
import UserProfile from "../Announcements/AnnouncementDetails/Authenticated/UserProfileAnnouncement";
import notfound from '../../lottieAssets/9341-not-found.json';
import Lottie from 'react-lottie';
import {toast} from "react-toastify";
import {useCounter, useCounterActions} from "../../Context/CounterProvider";
import SetLikeOfBlog from "./LikePost/SetLike";
import RemoveLikeOfBlog from "./LikePost/RemoveLike";
import PostLikers from "./likerOfPost";
import { FcSearch } from "react-icons/fc";
import SearchIcon from "@mui/icons-material/Search";
import {useSearchBlog} from '../../hooks/useSearchBlog'
import './generalPost.css'
import {Col, Row} from "react-bootstrap";
import MostLikedPost from "./mostLikedPost";


export default function UsersPosts()
{
    const NotFound = () => {

        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: notfound,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        };
      
        return(
          <div class="col-lg-12">
            <Lottie 
              options={defaultOptions}
              height={300}
              width={420}
            />
          </div>
        )
    }

    const [open_liker, setOpen_liker] = useState(false);
    const [close_liker, setClose_liker] = useState(true);
    const [blog_id, setBlog_id] = useState(null);

    
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const counter = useCounter();
    const setCounter = useCounterActions();

    const [resault,setResault]=useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [active,setActive]=useState(true)


    useEffect( () =>
    {
        axios(`https://api.nomadjourney.ir/api/v1/blog/posts/`)
            .then((data) => {
                setBlogs(data.data)})
            .catch(error =>
            {
            })
            .finally( () => {
                setLoading(false);
                console.log(blogs);
            })
    }, [counter]);
    useEffect(()=>{setResault(blogs.data)},[blogs])

    const handleChange = (event) => {
    setSearchTerm(event.target.value)
        if(searchTerm.length>=3)
        {
        setActive(false)
        }else{
        setActive(true)
    }};

    const {searchBlogs,searchRes}=useSearchBlog()
    const handelClick=(event)=>
    {
        event.preventDefault();

        searchBlogs(searchTerm);
        
        setResault(searchRes)
        
      
    }
//-----------------------------------------------------------------
   

    
    let user_id;

    if (localStorage.getItem('tokens'))
    {
        const allData = JSON.parse(localStorage.getItem('tokens'));
        user_id = allData.user_id;
    }
    const post_createdAt = (time) => {
        const created_at = new Date(time);
        const diffDate = new Date() - created_at;
        let diffDays = Math.floor(diffDate / 86400000); // days
        let diffHrs = Math.floor((diffDate % 86400000) / 3600000); // hours
        let diffMins = Math.round(((diffDate % 86400000) % 3600000) / 60000);
        if(diffMins < 60)
            return(
                <>
                    {diffMins}m
                    </>)
        if(diffHrs < 24)
            return(
                <>
                    {diffHrs}h
                </>)
        return(
                <>
                    {diffDays}d
                </>)

    }
    const checkNotNull = () => {
        if(blog_id != null)
            return(
                <>
                    <PostLikers
                        blog_id={blog_id}
                        setBlog_id={setBlog_id}
                        close={close_liker}
                        setClose={setClose_liker}
                        open={open_liker}
                        setOpen={setOpen_liker}
                    />
                </>
            )
    }
    if(!loading)
        return(
        <>
            <Row>
                <Col md={3}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: 1,
                            marginBottom:"1rem",
                            position:"relative"
                        }}>
                            <MostLikedPost />
                    </Box>
                </Col>
                <Col md={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: 3/4,
                            marginLeft:"3vw",
                            marginBottom:"1rem"
                        }}>

                        <Box
                            sx={{
                                backgroundColor:"#ffffff",
                                position:'relative'
                            }}>


                    <Container  sx={{ mt: 20 ,
                        top:0,
                        right:0,
                        justifyContent:'center',
                        position:'absolute',
                        display:'flex',
                        margin:'1.3rem',
                        width:'100%',
                    }}>
                        <TextField

                    id="search"
                    type="search"
                    label="Search"
                    variant='standard'
                    value={searchTerm}
                    onChange={handleChange}
                    autoFocus 
                    autoComplete='off'
                    sx={{ width:'100%' ,
                    justifyContent:'center',
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start' >
                          <IconButton disabled={active} onClick={handelClick} >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Container>
                <Box
                    sx={{
                        width: 1/3,
                        borderRadius:'15px',
                        backgroundColor:'#D5D8DD'
                    }} >
                
               
                
                
                <Stack sx={{backgroundColor:'#D5D8DD'}} >
                
                {resault && 
                    resault.map((blog, key) => (
                        <Grid item sx={{backgroundColor:'#ffffff'}}>
                                <div className="blogs-hovering" sx={{
                                        
                                        borderRadius:'15px',
                                        border:'2px solid #004E89'

                                }}>
                                    <div style={{
                                        paddingTop:"2rem", paddingBottom:"1rem"}}>
                                    <Stack sx={{
                                        marginLeft:"1rem",
                                    }} spacing={1}>
                                        <Item>
                                            <Stack direction={`row`} spacing={1}
                                                   sx={{
                                                       display:"flex",
                                                       alignItems:"center"
                                                   }}>
                                                <Item>
                                                    <UserProfile user_id={blog.host_id} first_name={blog.host_name} imageSize={50} profileSize={`4rem`}/>
                                                </Item>
                                                <Item>
                                                    <Typography component="h5"
                                                                style={{fontSize:"1.25vw" }}>
                                                            <span>
                                                                {blog.host_name}
                                                            </span>
                                                    </Typography>
                                                </Item>
                                                <Item>
                                                    <Typography component="h5"
                                                                style={{fontSize:"0.8vw" }}>
                                                            <span style={{color:"#6b6767"}}>
                                                                {post_createdAt(blog.created_at)}
                                                            </span>
                                                    </Typography>
                                                </Item>
                                            </Stack>
                                        </Item>
                                        <Item>
                                            <Stack sx={{
                                                marginLeft:"3rem"
                                            }}>
                                                <Item>

                                                                    <Typography component="h5"
                                                                                style={{fontSize:"1.25vw" }}>
                                                            <span>
                                                                {blog.blog_title}
                                                            </span>
                                                                        <span style={{
                                                                            float:"right",
                                                                            marginRight:"5rem"
                                                                        }}>
                                                    <Rating sx={{color:"#e45505"
                                                    }} name="read-only" value={3} readOnly precision={0.1} />
                                                            </span>
                                                                    </Typography>
                                                                </Item>
                                                                <Item>
                                                                    <Box sx={{
                                                                        wordBreak:"break-word",
                                                                        width:"92%",
                                                                        marginBottom:"1rem"
                                                                    }}>
                                                                        <Typography component="h5"
                                                                                    style={{fontSize:"0.75vw" }}>
                                                            <span>
                                                            {blog.description}
                                                            </span>
                                                        </Typography>
                                                    </Box>
                                                </Item>
                                                <Grid item >
                                                    {blog.main_image_64!=null ?
                                                    <>
                                                    <img src={blog.main_image_64}
                                                        style={{borderRadius:"5%",
                                                        border:"solid",
                                                            borderWidth:"thin",
                                                            borderColor:"#b2b2b2"
                                                        }}
                                                        width="92%" />
                                                    </>
                                                    :
                                                    <Grid  container alignItems='center' direction='column' justifyContent="center">
                                                        <Item>
                                                            <NotFound/>
                                                        </Item>
                                                    </Grid>
                                                    }

                                                </Grid>
                                            </Stack>
                                        </Item>
                                        <Item>
                                            <Box display="flex"
                                                 justifyContent="center"
                                                 alignItems="center"
                                                 sx={{ width: 1,
                                                    marginTop:"1rem"}}>
                                                {/* {!blog.is_liked.includes(user_id)
                                                    && <SetLikeOfBlog blog_id={blog.uid} />}
                                                {blog.is_liked.includes(user_id)
                                                    && <RemoveLikeOfBlog blog_id={blog.uid} user={user_id} />} */}
                                                {blog.is_liked.includes(user_id)?
                                                <><SetLikeOfBlog blog_id={blog.uid} Isfill={true}/></>
                                                :
                                                <><SetLikeOfBlog blog_id={blog.uid} isFill={false}/></>
                                                }
                                                <div className="likes"
                                                    onClick={()=>{
                                                        setOpen_liker(true);
                                                        setClose_liker(false);
                                                        setBlog_id(blog.uid);
                                                    }
                                                    }>
                                                    {blog.num_likes > 0 ? blog.num_likes : null}
                                                </div>

                                                            </Box>
                                                        </Item>
                                                    </Stack>
                                                </div>
                                </div>
                                <Divider sx={{ borderBottomWidth: 1, width: "100%"}} />
                        </Grid>))}
                </Stack>
                </Box>
            </Box>
        </Box>
    </Col>
            <Col md={2}/>
            </Row>


            {checkNotNull()}
            {() => setBlog_id(null)}

        </>
    )

}