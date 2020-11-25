import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Orders/Order';

let kEy = 1;

class Orders extends Component {
   state = {
      orders: []
   }
   componentDidMount() {
      axios.get('/getBurgerOrders').then(response => {
         this.setState({ orders: response.data });
      }
      );

   }

   render() {

      //   let tbodyData = this.renderTableData;
      //   let theadData = this.renderTableHeader;
      return (
         this.state.orders.map(order => {
            return (
               <Order key={kEy++} order={order} />
            );
         })
      );

   }

   //  renderTableHeader() {
   //      let header = Object.keys(this.state.orders[0])
   //      return header.map((key, index) => {
   //         return <th key={index}>{key.toUpperCase()}</th>
   //      })
   //   }

   //   renderTableData() {
   //      return this.state.students.map((order, index) => {
   //         const { id, ingredients, orderAmount } = order //destructuring
   //         return (
   //            <tr key={id}>
   //               <td>{id}</td>
   //               {/* <td>
   //              {Object.keys(ingredients).map(igKey => {
   //              return <span key={igKey}>{igKey} : {ingredients[igKey]}</span>
   //          })}</td> */}
   //               <td>{orderAmount}</td>
   //            </tr>
   //         )
   //      })
   //   }
}

export default Orders;