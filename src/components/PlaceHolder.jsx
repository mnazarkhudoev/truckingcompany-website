import logo from "@/assets/img/logo/ca-logo3.1.png";

const PlaceHolder = () => {
  return <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader dark">
                <div className="animation-preloader">
                    <div className="logo-loading">
                        <img src={logo} alt="Iron Bull Trucking" className="loading-logo" />
                    </div>
                    <div className="spinner"></div>
                    <div className="loading-text">
                        <span>Loading...</span>
                    </div>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};
export default PlaceHolder;