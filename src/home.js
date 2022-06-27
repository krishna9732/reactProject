import { Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu } from "react-pro-sidebar";
import './home.css';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
// import Dash from "./dashboard";
import ProductDetails from "./product";



function WelcomeHome() {
    let pageData = 'Dashboard'
    return (
        <>
            <div className='sidebar'>
                <Header />
                <div className="oh-yeah">

                    <ProSidebar>
                        <SidebarHeader style={{ padding: "20px" }}>
                            {pageData}
                        </SidebarHeader>
                        <Menu iconShape="square">
                            <MenuItem>Dashboard <Link to="/Dashboard" /></MenuItem>
                            <SubMenu title="Components">
                                <MenuItem>Component 1</MenuItem>
                                <MenuItem>Component 2</MenuItem>
                            </SubMenu>
                            <SubMenu title="Reports">
                                <MenuItem>My Report</MenuItem>
                                <MenuItem>MIS Report</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                    <ProductDetails />
                </div>
                {/* < Footer /> */}
            </div>

        </>
    )
}

export default WelcomeHome;