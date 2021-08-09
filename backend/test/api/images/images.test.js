const expect = require("chai").expect;
const request = require("supertest");
const mongoose = require("mongoose");

const serverConfig = require("../../../config");
const app = require("../../../index");
const server = require("../../../models");

describe("POST /", () => {
    beforeEach((done) => {
        mongoose
            .connect(server.connectionUri, server.connectionOptions)
            .then(() => done())
            .catch((err) => done(err));
    });
    after((done) => {
        mongoose
            .disconnect(server.connectionUri, server.connectionOptions)
            .then(() => done())
            .catch((err) => done(err));
    });

    it('OK, signing in', (done) => {
        request(app).post('/user/signin')
            .send({ email: 'utshav@gmail.com', password: "1hhh23456" })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("_id");
                expect(body).to.contain.property("token");
                done();
            }).catch(done);

        // it('OK, posting a new image', async(done) => {
        //     await request(app).post('/picture/add/:userId')
        //         .send({ link: 'https://gallery-app-mern.s3.ap-south-1.amazonaws.com/0d679fdb1ac01128e8323a338f7a5d9c', album: "6110f39032834676621b1cbc", user: "6110f28367453f709f5b7f16" })
        //         .then((res) => {
        //             const body = res.body;
        //             // expect(body).to.contain.property('album');
        //             expect(body).to.contain.property('_id');
        //             // expect(body).to.contain.property('link');
        //             // expect(body).to.contain.property('user');
        //             // expect(body).to.contain.property('createdAt');
        //             // expect(body).to.contain.property('updatedAt');
        //             done();
        //         }).catch(done);
    })
});