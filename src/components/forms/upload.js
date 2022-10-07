import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { storage } from '../../firebase-config';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid'

function UploadImg() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/")
    const UploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    }
    useEffect(() => {
        listAll(imageListRef).then(response => {
            console.log(response);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <Container fluid="md" className='py-5 w-25'>
            <h2>Upload image</h2>
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />

            <button onClick={UploadImage}>Upload image</button>

            {
                imageList.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item} alt="test" />
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default UploadImg
