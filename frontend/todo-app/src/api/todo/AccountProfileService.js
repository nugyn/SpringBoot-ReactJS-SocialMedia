import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class AccountProfileService{

    retrieveInfo(name) {
        console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/profile`);
    }

    retrieveDetails(name) {
        console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/profile/details`);
    }

    retrieveAllInfo() {
        console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/all/profile`);
    }

    deleteInfo(name, id) {
        // console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/profile/${id}`);
    }

    updateInfo(name, id, profile) {
        // console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/profile/${id}`, profile);
    }

    updateDetails(username,firstname,lastname,email,studentnumber,phonenumber,aboutme) {
        return axios.post(`${API_URL}/updateProfile`, {
            username,
            firstname,
            lastname,
            email,
            studentnumber,
            phonenumber,
            aboutme
        })
    }

    checkDuplicateUsername(username) {
        if(username != null){
        return axios.get(`${JPA_API_URL}/checkuser/username/${username}`);
        }
    }

    checkDuplicateStudentnumber(studentnumber) {
        if(studentnumber != null){
        return axios.get(`${JPA_API_URL}/checkuser/studentnumber/${studentnumber}`);
        }
    }

    checkDuplicateEmail(email) {
        if(email != null){
        return axios.get(`${JPA_API_URL}/checkuser/email/${email}`);
        }
    }

    checkDuplicatePhonenumber(phonenumber) {
        if(phonenumber != null){
        return axios.get(`${JPA_API_URL}/checkuser/phonenumber/${phonenumber}`);
        }
    }


    createInfo(name, profile) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/profile/`, profile);
    }

    uploadAvatar(username,file){
        return axios.post(`${API_URL}/uploadAvatar` , {
            username,
            file
            }
    )
    }

    uploadBackground(username,file){
        return axios.post(`${API_URL}/uploadBackground` , {
                username,
                file
            }
        )
    }

}

export default new AccountProfileService()