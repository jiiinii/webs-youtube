import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTo = () => {
    const { pathname } = useLocation();

    // 페이지 변화 마다 스크롤을 항상 상단에서 시작하도록
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}

export default ScrollTo;