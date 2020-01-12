import moment from 'moment';
import I18n from '../utils/I18n';

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
      icon = require('../images/004-hospital.png');
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
      description: generateDescByType(data),
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
  const tested = item.tested ? `• ${I18n.t('profile.test')} ${item.testPassed ? I18n.t('profile.passed') : I18n.t('profile.failed')}` : '';
  const separated = item.separated ? I18n.t('profile.separated') : '';

  return `${time} ${bloodType} ${tested} ${separated} `
}

function generateDescByType(data) {
  let description = '';

  if (data.historyType == 4) {
    const patientName = data.toName.slice(0, data.toName.indexOf(';;;')),
      patientPhone = data.toName.slice(-10);
    description = `${I18n.t('profile.patient')} ${patientName}\n${I18n.t('profile.phone')} ${patientPhone}\n${data.description}`;
  }
  else if (data.historyType == 2)
    description = `${I18n.t('profile.disposed')}\n${data.description}`;
  else
    description = `${I18n.t('profile.to')} ${data.toName}\n${data.description}`;
  return description;
}