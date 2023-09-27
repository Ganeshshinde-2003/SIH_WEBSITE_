import React from 'react';
import Card from '../components/DashboardOverviewCrads';
import { FaFileUpload }  from 'react-icons/fa' ;
import { GrInProgress } from 'react-icons/gr' ;
import { BsFillBookmarkCheckFill } from 'react-icons/bs' ;
import { MdSmsFailed } from 'react-icons/md' ;
import Table from '../components/PublisherTable';
import TranslatorSidebar from '../components/TranslatorSidebar';

const TranslaterDashboard = ()=> {
  return (
    <div style={{display:'flex'}}>
      <TranslatorSidebar />
      <div>
      <div className="publisher-cards-container">
      <Card
        icon={<GrInProgress />}
        title="Currently in Translation"
        content="4"
        contentColor="#FFBF00"
      />
      <Card
        icon={<BsFillBookmarkCheckFill />}
        title="Translated successfully"
        content="5"
        contentColor="green"
      />
      <Card
        icon={< MdSmsFailed />}
        title="Rejected"
        content="1"
        contentColor="red"
      />
      <Card
        icon= {<FaFileUpload />}
        title="Total books Translated"
        content="10"
      />
      </div>
      <Table />
      </div>
      
    </div>
  );
}

export default TranslaterDashboard;
