// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, test } from '@jest/globals';
import ModelBase from './ModelBase';
import { HostAppDataType, HostGroupedTypeItem } from '@/types';

const data = [
  {
    name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
    contributors: [
      'Edwin Reinger',
      'Ofelia Dickens',
      'Hilbert Cole',
      'Helen Kuphal',
      'Maurine McDermott Sr.'
    ],
    version: 7,
    apdex: 68,
    host: [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz'
    ]
  },
  {
    name: 'test2',
    contributors: ['Edwin Reinger'],
    version: 10,
    apdex: 100,
    host: ['7e6272f7-098e.dakota.biz']
  }
] as HostAppDataType[];

describe('Model tests', () => {
  test('Check How data will be prepared', () => {
    const hosts = ModelBase.groupByHostGeneral(data);

    expect(hosts).toBeInstanceOf(Object);
    expect(Object.keys(hosts)).toEqual([
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz'
    ]);
  });

  test('Check hosts preparation', () => {
    const hosts = ModelBase.groupByHostGeneral(data);
    const prepared = ModelBase.prepareHostsGeneral(data, hosts);
    expect(prepared['7e6272f7-098e.dakota.biz'][0].apdex).toBe(100);
    expect(
      prepared['7e6272f7-098e.dakota.biz'][0].apdex
    ).toBeGreaterThanOrEqual(prepared['7e6272f7-098e.dakota.biz'][1].apdex);
  });

  test('check that sort works as expected', () => {
    const testDataA = {
      name: 'test A',
      version: 1,
      app_key: 1,
      apdex: 10
    } as HostGroupedTypeItem;

    const testDataB = {
      name: 'test B',
      version: 2,
      app_key: 2,
      apdex: 20
    } as HostGroupedTypeItem;

    const testDataC = {
      name: 'test C',
      version: 3,
      app_key: 3,
      apdex: 10
    } as HostGroupedTypeItem;

    expect(ModelBase.sortHosts(testDataA, testDataB)).toBeGreaterThan(0);
    expect(ModelBase.sortHosts(testDataB, testDataC)).toBeLessThan(0);
    expect(ModelBase.sortHosts(testDataB, testDataC)).toBeLessThan(0);
    expect(ModelBase.sortHosts(testDataA, testDataC)).toBe(0);
  });
});
