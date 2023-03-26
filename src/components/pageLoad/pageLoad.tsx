import { LoadContainer, LogoImage } from "../../app/styles/styles";

const tv2Img = "https://brash-cardigan-f1e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd713d896-2b85-42c8-85d0-365acc1b01f9%2F46342d3e0ea64d558c39d06218987487.jpg?table=block&id=51e56228-7afa-488e-8777-42dc020e5007&spaceId=805dd5d2-3201-4fc2-ba32-66e76fa4e9f3&width=2000&userId=&cache=v2"

const PageLoad = () => {
    return (
        <LoadContainer>
            <LogoImage alt="tv2 logo" src={tv2Img} />
        </LoadContainer>
    );
}

export default PageLoad;
