
var React = require('react');
var MailComponent = require('./Mails');
//var GrandChildComponent1 = require('./GrandChildComponents1');
 //var arr=[];
var count=0;
var retrievedMailArr=[];
var pushedArr=[];
var InboxChildComponent = React.createClass({

  getInitialState: function(){
    return {data:[]};
  },
  componentDidMount:function()
  {
    var listid=[];
    var msglist=[];

    listid=this.props.id2;
    //console.log("propss"+this.props.id2);
      //console.log("sha555");
      //console.log("in"+listid[0]);

      console.log('listId  length----->'+listid.length);
    for(var i=0;i<listid.length;i++)
  {
    count =count+1;
    //console.log("Angel5");
    //console.log(listid[i]);
      var accessToken1 = localStorage.getItem('gToken');
      //console.log(listid[i]);
      $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/me/messages/'+listid[i]+'?fields=payload%2Fheaders&key={AIzaSyA7vlcclaPew1-wrTpzvC3AFZF34qQIJKw}',
       dataType: 'json',
       async :false,
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken1);
       },
       success: function(data)
       {
         var dataArr = Object.keys(data).map(function(k) { return data[k] });
             var mailDataArr=dataArr[0].headers;
             var fromArray = mailDataArr.filter(function(item) { return item.name === 'From';});
             var subjectArray = mailDataArr.filter(function(item) { return item.name === 'Subject';});
             var dateArray = mailDataArr.filter(function(item) { return item.name === 'Date';});
             var aggregatedArray=fromArray.concat(subjectArray).concat(dateArray);
             //retrievedMailArr.push(aggregatedArray);
             pushedArr.push(aggregatedArray);
             this.setState({data:pushedArr});
             console.log('this state called-->'+this.state.data);

       }.bind(this),
       error: function(xhr, status, err) {
         console.log("error");
         console.error(err.toString());
       }.bind(this)
    });

 }


  },
render: function(){
  var arr=[];
  var froms='';
   var to='';
   var dateg='';

var aggregatedArray1=this.state.data;
//console.log( 'State data--->'+JSON.stringify(aggregatedArray1));
console.log('State data2--->'+this.state.data);


//var tempProps=this.props.aggregatedArray1;
   aggregatedArray1.forEach(function(email) {
     console.log('email--->'+JSON.stringify(email));
       froms=email[0].value;
       to=email[1].value;
       dateg= email[2].value;
      // mailId = email[3];
       arr.push(<MailComponent froms={froms} to={to} dateg={dateg}/>);
   });

/*  for(var j=0;j<aggregatedArray1.length;j++) {
    //console.log("data---->"+JSON.stringify(data));


       //console.log('Values---->'+aggregatedArray1[j].value);
      if(aggregatedArray1[0].name=='From'){
        froms=aggregatedArray1[0].value;
      }

      if(aggregatedArray1[0].name=='Subject'){
        to=aggregatedArray1[0].value;
      }
      if(aggregatedArray1[0].name=='Date'){
        dateg=aggregatedArray1[0].value;
      }
      //mailId = email[3];
     arr.push(<MailComponent froms={froms} to={to} dateg={dateg} />);
     console.log("final"+arr);
  }*/
  //console.log("476566");
  //console.log(arr);
  return(<div className="container-fluid">
  <table className="table table-inbox table-hover" >
                   <tbody>
                   {arr}
                   </tbody>
                   </table>

                   </div>
                 )
                 }
                 });
                 module.exports = InboxChildComponent
