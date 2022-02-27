import React from 'react'

const Post = ({ message, gif }) => {
    return (
        <div class="row d-flex align-items-center justify-content-center" style={{ margin: '10px' }}>
            <div class="col-md-6">
                <div class="card">
                    <div class="d-flex justify-content-between p-2 px-3">
                        <div class="d-flex flex-row align-items-center"><img src='https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864' width="50" class="rounded-circle" />
                            <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">Jeanette Sun</span> <small class="text-primary">Collegues</small> </div>
                        </div>
                        <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">20 mins</small> <i class="fa fa-ellipsis-h"></i> </div>
                    </div> <img src={gif} class="img-fluid" />
                    <div class="p-2">
                        <p class="text-justify">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post