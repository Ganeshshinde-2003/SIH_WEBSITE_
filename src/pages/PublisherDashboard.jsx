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
      <div style={{display:'flex'}}>
      <Card
        icon= {<FaFileUpload />}
        title="Total books uploaded"
        content="20"
      />
      <Card
        icon={<GrInProgress />}
        title="Currently in Review"
        content="3"
        contentColor="yellow"
      />
      <Card
        icon={<BsFillBookmarkCheckFill />}
        title="Reviewed successfully"
        content="15"
        contentColor="green"
      />
      <Card
        icon={< MdSmsFailed />}
        title="Rejected"
        content="2"
        contentColor="red"
      />
      </div>
      <Table />
      </div>
      
    </div>
  );
}

export default PublisherDashboard;
