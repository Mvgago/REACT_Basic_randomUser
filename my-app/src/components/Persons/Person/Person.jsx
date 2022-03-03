const Person = (props) => {
    return (
        <div className='col-lg-4'>
            <div className="text-center ccard-box">
                <div className="member-card pt-2 pb-2">
                    <div className="thumb-lg member-thumb mx-auto">
                        <img
                            src={props.img}
                            className='rounded-circle img-thumbnail'
                            alt='profile-img'
                        />
                    </div>
                    <div>
                        <h4>{props.name}
                        <p className="text-muted">{props.role}</p></h4>
                    </div>
                </div>
            </div>
        </div>
    );

}