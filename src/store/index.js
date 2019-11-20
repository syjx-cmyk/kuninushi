// vuex使う。
// オブジェクトのインデックス用。
//
import Vue from 'vue'
import Vuex from 'vuex'
import { request } from '@/request.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // loadedはデータ取得済みフラグ。
  state: {
      objectIndex: {
          loaded: false,
          infra: [],
          uni: [],
          fabric: [],
      },
  },
  mutations: {
      setObjectIndex (state, objectIndex) {
          state.objectIndex = objectIndex;
      }
  },
  actions: {
      fetchObjectIndex : async ({commit}) => {
          const topObjects = ["uni", "infra", "fabric"];
          const objectIndex = {loaded: true, infra: [], uni: [], fabric: []};

          // 中にasyncがいるためforEach使えない。
          for(let i = 0; i < topObjects.length; i++) {
              const target = topObjects[i];
              const res = await request.get('/' + target);
              const resData = res.data;
              const objects = [];

              // b-form-option用インデックス生成。以下の形で生成する。
              // {
              //     value: オブジェクトのBSONID。
              //     text: 一覧表示用テキスト。"type : db"の形。
              // }
              resData.forEach((obj) => {
                  objects.push({
                      value: obj._id,
                      text: obj.type + ' : ' + obj.dn,
                  });
              });

              objectIndex[target] = objects;
          }

          commit('setObjectIndex', objectIndex);
      },
  },
  modules: {
  }
})
