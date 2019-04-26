# Band Rating MS [![Build Status](https://travis-ci.com/Kruspe/band-rating.svg?branch=master)](https://travis-ci.com/Kruspe/band-rating)

Want to be able to rate bands? This project will help you.

### node-rdkafka on windows
If node-gyp is not running on your windows machine read [https://github.com/Blizzard/node-rdkafka]

In my case the following did the trick:
```
npm --vs2015 install --global --production windows-build-tools
```
After this I had issues with the python path not being set. Removing and then installing Python (2.7.X) again did the trick for me.
Make sure the environment variable is being set while installing