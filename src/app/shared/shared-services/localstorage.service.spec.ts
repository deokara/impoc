import { TestBed, inject } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  let service: LocalstorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });

    service = TestBed.get(LocalstorageService);
  });

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  describe('setAccessToken', () => {
    it('should store the user token in localStorage',
      () => {
        service.setUserToken('dummytoken');
        expect(localStorage.getItem('userToken')).toEqual('dummytoken');
    });
  });

  describe('getAccessToken', () => {
    it('should return stored user token from localStorage',
      () => {
        localStorage.setItem('userToken', 'testtoken');
        expect(service.getUserToken()).toEqual('testtoken');
    });
  });
});
