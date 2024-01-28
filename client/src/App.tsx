import { Linkedin, Github, Mail } from "lucide-react";

function App() {
    return (
        <div className="flex w-screen h-screen items-center justify-center">
            <div className="w-[750px] flex flex-col space-y-8">
                <div className="space-y-3">
                    <div className="flex space-x-4 items-center">
                        <h3 className="text-xl">Marshall Blatz</h3>
                        <a href="https://www.linkedin.com/in/marshall-blatz/" target="_blank">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://github.com/moorshall" target="_blank">
                            <Github size={18} />
                        </a>
                        <a href="mailto:marshallpblatz@gmail.com" target="_blank">
                            <Mail size={18} />
                        </a>
                    </div>
                    <p className="text-grey">
                        I’m a software engineer passionate about using technology to solve complex problems and create
                        friendly user interfaces.
                    </p>
                </div>

                <div className="space-y-3">
                    <p>Projects</p>
                    <p className="text-grey">
                        <a
                            className=" underline items-center text-white"
                            href="https://cureight.vercel.app"
                            target="_blank"
                        >
                            Curate <i className="ti ti-external-link"></i>
                        </a>
                        {"  "}- A useful tool for sharing playlists independent of music service, and a platform for
                        playlist curators to show off.
                    </p>
                    <p className="text-grey">
                        <a
                            className=" underline items-center text-white"
                            href="https://amplo.vercel.app"
                            target="_blank"
                        >
                            Amplo <i className="ti ti-external-link"></i>
                        </a>
                        {"  "}- A simple, but effective habit tracking application (I turned the github contribution
                        chart into a habit tracker).
                    </p>
                </div>

                <div className="space-y-3">
                    <p>Work</p>
                    <div>
                        <div className="flex space-x-4">
                            <a
                                className=" underline items-center text-white"
                                href="https://irrc.education.uiowa.edu/"
                                target="_blank"
                            >
                                Iowa Reading Research Center <i className="ti ti-external-link"></i>
                            </a>
                            <p>(November 2021 - Present)</p>
                        </div>
                        <p className="text-grey">
                            Software Developer - Building and maintaining software to support researchers of children’s
                            literacy.
                        </p>
                    </div>
                    <div>
                        <div className="flex space-x-4">
                            <a className=" underline items-center text-white" href="https://rsmus.com/" target="_blank">
                                RSM <i className="ti ti-external-link"></i>
                            </a>
                            <p>(Summer 2022)</p>
                        </div>
                        <p className="text-grey">
                            Application Development Intern - A consulting role where I built extensions for Microsoft’s
                            ERP Platform, Business Central.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
