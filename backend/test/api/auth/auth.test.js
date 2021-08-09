const expect = require("chai").expect;
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../../index");
const server = require("../../../models");

describe("POST /user/signin", () => {
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
    })
});

describe("POST /user/signup", () => {
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

    it('OK, signup for a new user', (done) => {
        request(app).post('/user/signin')
            .send({ email: 'utshav@gmail.com', password: "1hhh23456", firstName: "John", lastName: "Doe" })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("_id");
                expect(body).to.contain.property("token");
                done();
            }).catch(done);
    })
});