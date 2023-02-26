import React, { lazy } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/front/common/partials/Footer';
import MenuBar from '../components/front/home/sections/MenuBar';
import TopNav from '../components/front/home/sections/TopNav';
import { database } from '../database';
const NotFound = lazy(() =>
    import('../components/front/common/notfound/NotFound')
);

const {
    pages: {
        home: {
            sections: {
                healthProfessionals: { memberDetailsData },
            },
        },
    },
} = database;

const MemberDetails = () => {
    const { slug } = useParams();

    const memberData = memberDetailsData[slug];
    if (memberData) {
        return (
            <>
                <TopNav />
                <MenuBar />
                <div className="px-4 my-20 max-w-7xl mx-auto md:px-8 flex flex-col sm:flex-row gap-8">
                    <div className="min-w-fit flex flex-col gap-8">
                        <div className="w-full xs:h-64 xs:w-2/3 sm:w-80 mx-auto relative overflow-hidden rounded-xl">
                            <img
                                src={memberData.image}
                                alt={memberData.name}
                                className="h-full w-full object-cover  border hover:scale-110 duration-300 ease-in-out"
                            />
                        </div>

                        <button className="w-full xs:w-2/3 sm:w-80 mx-auto bg-themeColor text-white px-6 py-3 rounded-md">
                            Book an Appointment
                        </button>
                    </div>
                    <div className="text-lg flex flex-col gap-2">
                        <div>
                            <h4 className="font-semibold">
                                {memberData.designation}
                            </h4>
                            <h4 className="font-medium">{memberData.degree}</h4>
                        </div>
                        <div>
                            <h2 className="font-bold">{memberData.name}</h2>
                            <p>{memberData.about}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
    return <NotFound />;
};

export default MemberDetails;
