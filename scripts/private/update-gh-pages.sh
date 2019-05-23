#!/bin/bash

ROOT_DIR=`dirname $0`/../..
cd $ROOT_DIR

SNAP_DIR=recipes-angular-snapshots
SANDBOX_DIR=$SNAP_DIR/sandbox


rm -rf $SNAP_DIR
mkdir $SNAP_DIR

for i in {0..12}
do
    mkdir $SNAP_DIR/step-$i
    git checkout -f step-$i
    
    if [[ $i = 0 ]]; then
        cp -r app config scripts test $SNAP_DIR/step-0/
        mkdir $SNAP_DIR/step-0/logs
        rm -r $SNAP_DIR/step-0/scripts/private
        rm $SNAP_DIR/step-0/scripts/update-repo.sh
    else
        cp -r app $SNAP_DIR/step-$i/
        mkdir $SNAP_DIR/step-$i/test/
        cp -r test/unit test/e2e $SNAP_DIR/step-$i/test
        rm -r $SNAP_DIR/step-$i/app/img
        rm -r $SNAP_DIR/step-$i/app/lib
        rm -rf $SNAP_DIR/step-$i/app/phones
    fi
    
    if [[ $i = 5 ]]; then
        cp -r app/img $SNAP_DIR/step-0/app/
        cp -r app/phones $SNAP_DIR/step-0/app/
    fi
done

mkdir $SANDBOX_DIR
cp scripts/private/goto_step.sh $SANDBOX_DIR
cp scripts/private/goto_step.bat $SANDBOX_DIR

# Install karma modules
cp -r node_modules/ $SANDBOX_DIR/

zip -r recipes-angular-`date +"%y%m%d_%H%M"` $SNAP_DIR

git checkout master
git checkout -f gh-pages
rm -rf step-*
mv $SNAP_DIR/* .
rm -rf $SNAP_DIR

# Commit any changes to the steps
git add --all step-*
git commit -m"chore(step): update live steps to new version of tutorial" || true

# Display an info message, including the last commit
echo gh-pages has been updated. See the log below.
git log -1

# Push changes to the gh-pages branch on GitHub
git push origin gh-pages
