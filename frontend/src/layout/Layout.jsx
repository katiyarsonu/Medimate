// import React from "react";

// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import Routers from "../routes/Routers";
// const Layout=()=>{
//     return <>
//     <Header/>
//     <main>
//         <Routers/>
//     </main>

//     <Footer/>
    
    
//     </>
// };

// export default Layout;


import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Routers />
            </main>
            {/* Chatbot iframe */}
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/KL_rJ1R9kNJZQl5HfuxdL"
                title="Chatbot"
                width="100%"
                style={{ height: '100vh', minHeight: '700px' }} // Adjust height as needed
            ></iframe>
            <Footer />
        </>
    );
};

export default Layout;

