import HelloWorld from '../utils/HelloWorld'


it ("Should return Hello Angela", ()=>{

    const result = HelloWorld();

    expect(result).toBe("Hello Angela")
});