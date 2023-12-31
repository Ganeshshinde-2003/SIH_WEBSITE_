import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/DashboardOverviewCrads';
import { FaFileUpload }  from 'react-icons/fa' ;
import { GrInProgress } from 'react-icons/gr' ;
import { BsFillBookmarkCheckFill } from 'react-icons/bs' ;
import { MdSmsFailed } from 'react-icons/md' ;
import Table from '../components/PublisherTable';

const PublisherDashboard = ()=> {
  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <div>
      <div className="publisher-cards-container">
      <Card
        icon= {<FaFileUpload />}
        title="Total books Uploaded"
        content="20"
      />
      <Card
        icon={<GrInProgress />}
        title="Currently in Review"
        content="3"
        contentColor="#FFBF00"
      />
      <Card
        icon={<BsFillBookmarkCheckFill />}
        title="Reviewed successfully"
        content="14"
        contentColor="green"
      />
      <Card
        icon={< MdSmsFailed />}
        title="Rejected"
        content="3"
        contentColor="red"
      />
      </div>
      <Table />
      </div>
      
    </div>
  );
}

export default PublisherDashboard;
