# Multiple CircleCI Orbs Pipeline Configuration

[![CircleCI](https://circleci.com/gh/mwaz/circleci-multiple-orbs-config.svg?style=svg)](https://circleci.com/gh/mwaz/circleci-multiple-orbs-config)

<p align="center"><img src="https://avatars3.githubusercontent.com/u/59034516"></p>

An Application for showing how to configure multiple CircleCI orbs on CI


## Clone the repository:

run the following command on your terminal to clone the repository:

```bash
git clone git@github.com:mwaz/circleci-multiple-orbs-config.git

cd circleci-multiple-orbs-config
```

## Install the dependencies - JS

Install the dependencies using the following command:

```bash
cd nodejs-cli

npm install
```

## Install the dependencies - Python

Install the dependencies using the following command:

```bash
cd flask-api

pip install -r requirements.txt
```

## Running tests - JS

```bash
cd nodejs-cli

npm test
```

## Running tests - Python

```bash
cd flask-api

pytest
```

## Details

This repo is built following a tutorial published on CircleCI blog under the CircleCI Guest Writer Program.

-   Blog post: [ Multiple CircleCI Orbs Pipeline Configuration][blog]
-   Author's GitHub profile: [Waweru Mwaura][author]

### About CircleCI Guest Writer Program


[blog]: https://circleci.com/blog/multiple-circleci-orbs-pipeline-configuration/
[author]: https://github.com/mwaz
