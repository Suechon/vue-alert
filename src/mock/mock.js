import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
/* eslint-disable*/
export default {
    run: client => {
        const mock = new MockAdapter(axios)
        mock.onGet('/page1').reply(config => {
            let res = "OK"
            return [200, res]
        }),
            mock.onGet('/page2').reply(config => {
                let res = "OK"
                return [200, res]
            })

    }

}