import http from "../Common/http-common";

const getQueries = () =>{
    return http.get('/queries');
}
const getQuery = id =>{
    return http.get(`/queries/${id}`);
}
const createQuery = data =>{
    return http.post('/queries',data);
}
const updateQuery = (id,data) =>{
    return http.put(`/queries/${id}`,data);
}
const deleteQuery = id =>{
    return http.delete(`/queries/${id}`);
}
const deleteQueries = () =>{
    return http.delete('/queries');
}
const QueryService = {
    getQueries,
    getQuery,
    createQuery,
    updateQuery,
    deleteQuery,
    deleteQueries

}
export default QueryService;