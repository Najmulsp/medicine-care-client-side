import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from './Firebase.config'
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
        const axiosPublic = useAxiosPublic();



        // create user
        const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }
        // sign in
        const login = ( email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
        }
        // log out
        const logout = () =>{
            setLoading(true)
            return signOut(auth)
        }
        // update profile
        const updateUserProfile = (name, photo) =>{
            return   updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
        }
       
        // observer
    useEffect(()=>{
        const unSubscribe =    onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                // console.log(currentUser.email)
                // get token from server and store
                const userInfo = { email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    // console.log(res.data)
                   if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                   } 
                })
            }
            else{
                // to do: remove token if stored on client side
               localStorage.removeItem('access-token')
            }
            setLoading(false);
        })
        return unSubscribe;
    }, [axiosPublic])  
    // axiosPublic

        
        // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };


    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logout,
        updateUserProfile,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {   
    children: PropTypes.object,
   
   
}
export default AuthProvider;