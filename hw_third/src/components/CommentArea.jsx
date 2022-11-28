import { Component } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Loading from './Loading'
import Error from './Error'


class CommentArea extends Component {
 

  state = {
    "comments": [],
    "rate": "",
    "elementId": "",
    "isLoading": true,
    "isError": false
  }

  fetchComments = async (asin) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjkyOTE2OTcsImV4cCI6MTY3MDUwMTI5N30.vyyYtgxu13tFizNGxsvLTZPCYPSsgNLDvy1Iu1qu7JE',
    }})
        this.setState({...this.state, isLoading: false})
      if (response.ok) {
        let data = await response.json()
        this.setState({...this.state, comments: data})
        }
        else {
            this.setState({...this.state, isError: true})
        }
      }
    
    catch(e) {}


}

deleteComment = async (id) => {

    try {
       await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: 'DELETE',
          headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjkyOTE2OTcsImV4cCI6MTY3MDUwMTI5N30.vyyYtgxu13tFizNGxsvLTZPCYPSsgNLDvy1Iu1qu7JE',
      }})

      this.fetchComments(this.props.asin);
      
        }

      
      catch(e) {}

}

componentDidMount() {
    this.fetchComments(this.props.asin);
}

componentDidUpdate() {
  
}

    render() {
        return <> <ListGroup>
            {this.state.isLoading&&(
                <Loading></Loading>
            )}
             {this.state.isError&&(
                <Error></Error>
            )}
            {this.state.comments.map((comment)=> (
            <ListGroup.Item key={comment._id}>{comment.comment}<Button variant='danger' onClick={() => {
                this.deleteComment(comment._id)
            }}>Delete</Button></ListGroup.Item>
        ))}</ListGroup>
        </>
    }
    
}



       
export default CommentArea
