export default function WriteTrans(userList, loginUser, updateUser, newTrans) {
    const saved = localStorage.getItem('Transaction');
    const initialValue = JSON.parse(saved);
    let transList =  initialValue || [];

    // eslint-disable-next-line
    updateUser(userList.map(user =>  (loginUser.id === user.id) ? { ...user, account: loginUser.account + newTrans.amount } : user));
    (transList.length !== 0) ? transList = [...transList, newTrans] : transList = [newTrans];
    localStorage.setItem('Transaction', JSON.stringify(transList));

};