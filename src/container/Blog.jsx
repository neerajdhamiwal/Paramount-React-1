import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';
import TagLinks from '../component/TagLinks.jsx';
import GridList from '../component/GridList.jsx';
import requestService from '../services/request.js';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import DocumentMeta from 'react-document-meta';
import ReactPaginate from 'react-paginate';


let nid = [];
class CaseStudy extends React.Component{
  constructor(){
    super()
      this.state = {
          activeCaseStudy: [],
          firstCaseStudy: [],
          featuredActive: {},
          caseStudyList:[],
          pageCount:'',
          loading: true,
          meta: {
              title: 'Blogs | Paramount Software Solutions ',
              description: 'Blogs that cover our point of view on various technical advancements happening around the world, and its impact in several industries and business overall.',
              canonical: 'http://paramountreact.opensenselabs.com/blog',
              meta: {
                  name: {
                      keywords: ''
                  }
              }
          },
          blogList:[]

      }
       this.caseStudyList = [];
      this.ff = {};
      this.lastIndex = 5;
      this.getTermInfo = this.getTermInfo.bind(this);
      this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillMount(){
      let CaseId = ''

      if(this.props.location && this.props.location.search){
          let uri = this.props.location.search.replace('%20','')
          CaseId =  uri.substring(uri.indexOf("=")+1)
      }
      requestService.getService('/blogs-listing-data')
        .then((response) => {
        this.caseStudyList =  response.data;
            nid = response.data[0].id.split(',');
        if(CaseId!==''){
            this.getTermInfo(parseInt(CaseId));
        }
        else{
            this.getTermInfo(nid[0]);
            localStorage.setItem('activeMenu', response.data[0].name.split(',')[0])
        }
      })
          .catch((err) => {
            //console.log(err);
          })
  }

    handlePageClick = (data) => {
        this.setState({activeCaseStudy:this.state.blogList.slice(data.selected*5, data.selected*5+5)});
    };

  getTermInfo(id){
    let uri = `/taxonomy/term-info-blogs/${id}`;
      requestService.getService(uri.replace(' ',''))
          .then((response) => {
              this.ff = {};
              response.data.forEach((obj, i) => {
                  if (obj.field_featured === 'On') {
                      // this.setState({featuredActive: obj});
                      this.ff = obj;
                      response.data.splice(i, 1);
                      // this.setState({loading: false});
                      return false;
                  }
              })
              this.setState({
                  featuredActive: this.ff,
                  loading: false,
                  blogList: response.data,
                  caseStudyList: this.caseStudyList,
                  activeCaseStudy: response.data.slice(0, 5),
                  pageCount: Math.ceil(response.data.length/5)
              });
          })
          .catch((err) => {
              //console.log(err);
          })
  }

  render() {
      console.log('pageCount', this.state.pageCount);
    return(
        this.state.loading? <center>
                <Loader
                    type="ThreeDots"
                    color="#fd302a"
                    height="100"
                    width="100"
                />
            </center> :
            <DocumentMeta {...this.state.meta}><div className="blogList">
                {Object.keys(this.ff).length>0? <FeaturedContent activeCaseStudy={this.state.featuredActive}/>:''}
                {this.props.locate === 'resource'?'':<TagLinks firstCaseStudy = {this.state.activeCaseStudy[0]} caseStudyList = {this.state.caseStudyList} getTermInfo={this.getTermInfo}/>}
             <div className=" bottom-100 clearfix"></div>
            {this.props.locate === 'resource'?'':<div>
              <CaseStudylist activeCaseStudyData = {this.state.activeCaseStudy}/>
                    <ReactPaginate previousLabel={"previous"}
                                   nextLabel={"next"}
                                   breakLabel={"..."}
                                   breakClassName={"break-me"}
                                   pageCount={this.state.pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
            </div>
        }
                <GridList/>
                </div>
                </DocumentMeta>

    )
  }
}

export default CaseStudy;
