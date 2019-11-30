import moment from 'moment'

function getIconByType(type) {
  let icon = '';
  switch (type) {
    case 'BLOOD_CAMP': {
      icon = require('../images/048-blood-transfusion.png');
      break;
    };
    case 'BLOOD_TEST_CENTER': {
      icon = require('../images/010-microscope.png');
      break;
    };
    case 'BLOOD_SEPARATION_CENTER': {
      icon = require('../images/040-erythrocytes.png');
      break;
    };
    case 'BLOOD_BANK': {
      icon = require('../images/045-first-aid-kit.png');
      break;
    };
    case 'HOSPITAL': {
      icon = require('../images/034-medical-center.png');
      break;
    };
  }
  return icon;
}

export function convertTranferHistories(histories) {
  let newHistories = [];

  histories.map(data => {
    const tranferObj = {
      time: moment(data.transferedAt).format('h:mm a MMM D, YYYY'),
      description: `TO: ${data.toName}\n${data.description}`,
      title: `${data.fromName}`,
      icon: getIconByType(data.fromType)
    }
    newHistories.push(tranferObj);
  })

  return newHistories;
}

export function generateInfoPack(item) {
  const time = moment(item.createdAt).format('lll');
  const bloodType = item.bloodType ? ` • ${item.bloodType}` : '';
  const tested = item.tested ? `• Test: ${item.testPassed ? 'passed' : 'failed'}` : '';
  const separated = item.separated ? '• Separated' : '';

  return `${time} ${bloodType} ${tested} ${separated} `
}