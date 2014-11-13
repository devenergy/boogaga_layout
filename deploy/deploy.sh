#!/bin/sh
sudo echo '---- BRANDLE DEPLOYING START ----';

# ------------ GLOBAL NODE MODULES -----------
sudo npm i -g bower;
sudo npm i -g gulp;

# ------------ NODE LOCAL MODULES -----------
(cd ../config && sudo npm install && sudo rm -rf ../node_modules && sudo mv node_modules ../node_modules);

# ------------ FRONTEND MODULES -----------
(rm -rf ../js/vendor && cd ../config && bower install);