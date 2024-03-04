
import {Container,Image,Description,IconViews,Icon,Views} from "./styled";


const ArticlesFolder =(props)=>{
    const {details}=props ;
    const {imageUrl,icon,content,views}=details;
    return (
        <Container>
            
                <Image src={imageUrl} alt="not found"/>
                <Description>{content}</Description>
                <IconViews>
                    <Icon src={icon} alt="views"/>
                    <Views>{views}</Views>
                </IconViews>
            
        </Container>
    )

}

export default ArticlesFolder;