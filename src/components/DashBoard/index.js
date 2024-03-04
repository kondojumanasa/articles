import React from "react";
import sepnoty from "./Images/sepnoty.png";
import add from "./Images/add.png";
import profile from "./Images/profile.png";

import vector from "./Images/Vector.png";
import careericon from "./Images/careericon.png";
import blogicon from "./Images/blogicon.png";
import eventicon from "./Images/eventicon.png";

import facebbok from "./Images/fbimg.png";
import disney from "./Images/disneyimg.png";
import airimg from "./Images/airimg.png";
import Aiimg from "./Images/AiImg.png";

import views from "./Images/viewicon.png";

import ArticlesFolder from "../DashBoard/ArticleFolder";



import { Container,
    Resources,ContainerOne,Containertwo,ImagesCont,
    Image ,AddImg,Contactimgcon,Name,Profile,Containerthree,ColumnDiv,
    ArticalCon,Icons,IconName,Containerfour} from "./styledComponents";


const Lists=[

    {
    id:1,
    imageUrl:disney,
    content:"The Disney Principle of Motion Design for Interface Animations.....",
    icon:views,
    views:"6000 views"
    },

    {
    id:2,
    imageUrl:airimg,
    content:"How Airbnb's landing page design influences user behavior.....",
    icon:views,
    views:"6000 views"
    },

    {
        
    id:3,
    imageUrl:Aiimg,
    content:"It’s time for tech to ask “Should We” Instead of “Could We”.....",
    icon:views,
    views:"6000 views"
    },

    {id:4,
    imageUrl:facebbok,
    content:"Facebook creates “Radioactive Images,” and Other AI....",
    icon:views,
    views:"6000 views"
    },

    
]


const DashBoard=()=>{
    return (
        <Container>
            <Resources>Resources > Admin login > Dashboard Page</Resources>
            <ContainerOne>

              <Containertwo>
                    <ImagesCont>
                        <Image src={sepnoty} alt="sepnoty" />
                        <AddImg src={add} alt="addButton"/>
                    </ImagesCont>
                    <Contactimgcon>
                        <Name>Manikumar Pokala</Name>
                        <Profile src={profile} alt="profile"/>
                    </Contactimgcon>
              </Containertwo>

                <Containerthree>
                    <ColumnDiv>
                    <ArticalCon>
                        <Icons src={vector} alt="icon"/>
                        <IconName>My Articles</IconName>
                    </ArticalCon>
                    <ArticalCon>
                        <Icons src={blogicon} alt="icon"/>
                        <IconName>My Blogs</IconName>
                    </ArticalCon>
                    <ArticalCon>
                        <Icons src={careericon} alt="icon"/>
                        <IconName>My Career Opportunities</IconName>
                    </ArticalCon>
                    <ArticalCon>
                        <Icons src={vector} alt="icon"/>
                        <IconName>Reports</IconName>
                    </ArticalCon>
                    <ArticalCon>
                        <Icons src={vector} alt="icon"/>
                        <IconName>Projects</IconName>
                    </ArticalCon>
                    <ArticalCon>
                        <Icons src={eventicon} alt="icon"/>
                        <IconName>Events and Worshops</IconName>
                    </ArticalCon>
                    
                    </ColumnDiv>

                    <Containerfour>
                        {Lists.map((each)=>(
                            <ArticlesFolder key={each.id} details={each}/>
                            ))}
                    </Containerfour>

                  </Containerthree>

            </ContainerOne>
        </Container>
    )
}

export default DashBoard;