import React from 'react';

const PlayerBanner = () => {
    return (
        <>
       <div class="container player-banner-container">
            <div class="row background-img">
                <div class="col-sm-6 img-overlay">
                    <img className="img-fluid profile-pic" src="../img/bronny_profile_pic_2_crop.png" />
                </div>
                <div class="col-sm-6 player-detail-container">
                    <p className="player-name"><span className="player-number">#0 </span>| Bronny James</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 stat-border stat-border-none">
                    <div className="mb-4"><p className="stat-header">HT</p></div>
                    <p className="player-details">6-2</p>
                </div>
                <div class="col-sm-6 stat-border stat-border-none">
                    <div className="mb-4"><p className="stat-header">BORN</p></div>
                    <p className="player-details">10/06/04</p>
                </div>
                <div class="w-100"></div>
                <div class="col-sm-6 stat-border stat-border-none">
                    <div className="mb-4"><p className="stat-header">AGE</p></div>
                    <p className="player-details">15</p>
                </div>
                <div class="col-sm-6 stat-border stat-border-none">
                    <div className="mb-4"><p className="stat-header">WT</p></div>
                    <p className="player-details">165<span className="player-details-wt"> lbs</span></p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 stat-border cool">
                    <div className="spacer"><p className="stat-header">PTS</p><p className="player-details padding-stats">25.6</p></div>
                </div>
                <div class="col-sm-4 stat-border">
                    <div className="spacer"><p className="stat-header">REB</p><p className="player-details padding-stats">7.2</p></div>
                </div>
                <div class="col-sm-4 stat-border">
                    <div className="spacer"><p className="stat-header">AST</p><p className="player-details padding-stats">9.6</p></div>
                </div>
            </div>
        </div>
</>
    )
}

export default PlayerBanner;