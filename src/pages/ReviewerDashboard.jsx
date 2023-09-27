import React from 'react';
import ReviewerSidebar from '../components/ReviewerSidebar';
import Card from '../components/DashboardOverviewCrads';
import { FaFileUpload }  from 'react-icons/fa' ;
import { GrInProgress } from 'react-icons/gr' ;
import { BsFillBookmarkCheckFill } from 'react-icons/bs' ;
import { MdSmsFailed } from 'react-icons/md' ;
import Table from '../components/PublisherTable';

const ReviewerDashboard = ()=> {
  return (
    <div style={{display:'flex'}}>
      <ReviewerSidebar />
      <div>
      <div className="publisher-cards-container">
      <Card
        icon={<BsFillBookmarkCheckFill />}
        title="Reviewed successfully"
        content="4"
        contentColor="green"
      />
      <Card
      icon={< MdSmsFailed />}
      title="Rejected"
      content="2"
      contentColor="red"
    />
      <Card
        icon={<GrInProgress />}
        title="Currently in Review"
        content="2"
        contentColor="#FFBF00"
      />
      <Card
      icon= {<FaFileUpload />}
      title="Total books Reviewed"
      content="8"
    />
      </div>
      <Table />
      </div>
      
    </div>
  );
}

export default ReviewerDashboard;
