'use strict';

describe('conFusion App E2E Testing', function () {

    it('should automatically redirect to / when location hash/fragment is empty', function () {

        browser.get('/');
        expect(browser.getCurrentUrl()).toMatch("/");

    });

    describe('index', function () {
        beforeEach(function () {
            browser.get('/#!/');
        });

        it('should have a title', function () {
            expect(browser.getTitle()).
                toEqual('Ristorante Con Fusion');
        });
    });

    describe('menu 0 item', function () {
        beforeEach(function () {
            browser.get('/#!/menu/0');
        });

        it('should have a name', function () {
            var name = element(by.binding('dish.name'));
            expect(name.getText()).
                toEqual('Uthapizza Hot $4.99');
        });

        it('should show the number of comments as', function () {
            expect(element.all(by.repeater('comment in $parent.dish.comments'))
                .count()).toEqual(5);

        });

        it('should show the first comment author as', function () {
            element(by.model('sortBy')).sendKeys('author');
            expect(element.all(by.repeater('comment in $parent.dish.comments'))
                .count()).toEqual(5);
            var author = element.all(by.repeater('comment in $parent.dish.comments'))
                .first().element(by.binding('comment.author'));

            expect(author.getText()).toContain('25 Cent');

        });
    });

});



