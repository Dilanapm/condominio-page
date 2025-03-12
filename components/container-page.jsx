import { CoverParticles } from "./cover-particles";

const ContainerPage = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center 
        bg-darkBg/60 bg-no-repeat">
            <div className="flex-1 w-full flex justify-center items-center">{children}</div>
        </div>
    );
};

export default ContainerPage;
