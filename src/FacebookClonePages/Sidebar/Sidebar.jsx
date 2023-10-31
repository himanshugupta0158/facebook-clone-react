import React from 'react';
import './Sidebar.css';
import SidebarRow from './SideRowBar';

export const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
        <SidebarRow avatar ImageLink="http://www.tabienrodpramool.com/img/profile-icon.png" title={user?.displayName} />
        <SidebarRow selected ImageLink="https://www.pngitem.com/pimgs/m/78-784028_facebook-news-feed-logo-hd-png-download.png" title="News Feed" />
        <SidebarRow ImageLink="https://i.pcmag.com/imagery/reviews/07lQpWrUp49vFYcx0FC95Qf-7.1569478379.fit_scale.size_1028x578.png" title="Messenger" />
        <SidebarRow ImageLink="https://i.pinimg.com/736x/9e/d8/61/9ed86194c90b60ad5ce0e14fdb1b97d5.jpg" title="Watch" />
        <h3>Explore</h3>
        <SidebarRow ImageLink="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" title="Welcome" />
        <SidebarRow ImageLink="https://bettervaluesbetterbanking.com/images/covid-19_logo_CCUA.png" title="COVID-19 Information" />
        <SidebarRow ImageLink="https://clipground.com/images/orange-flag-clipart.png" title="Pages" />
        <SidebarRow ImageLink="https://th.bing.com/th/id/OIP.16lK09gy0ubG4-Y-VyQFewAAAA?pid=ImgDet&rs=1" title="Events" />
        <SidebarRow ImageLink="https://th.bing.com/th/id/OIP.AzbtHkdu5U5PROZVQV9-PQHaFP?pid=ImgDet&rs=1" title="Groups" />
    </div>
  )
}
