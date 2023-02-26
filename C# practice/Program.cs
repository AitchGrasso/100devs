// namespace Giraffe
// {
//     class Program
//     {
//         static void Main (string[]args)
//         {
//             Console.WriteLine("Hello World");
//             //always end in ;
//         }
//     }
// 

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BirdScript : MonoBehaviour
{
    public Rigidbody2D myRigidbody;
    public float flapStrength;

    // Start is called before the first frame 
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        // use if to skip some code unless conditionhas beemn
        if (Input.GetKeyDown(KeyCode.Space) == true)

        myRigidbody.velocity = Vector2.up * flapStrength;

        //one = to make the thing on the left to make the same as the thing on the right
        //two == to check to see if the thing on the left is the same as the things on the right

    }

}

public class PipeMoveScript : MonoBehaviour
{

    public float moveSpeed = 5;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.position = transform.position + (Vector3.left * moveSpeed) * Time.deltaTime
    }
    // keepiong track of dept with the Z value
}

public class PipeSpawnScript : MonoBehaviour
{
    public GameObject pipe;
    public float spawnRate = 2;
    private float timer = 0;

    // Start is called before the first frame update
    void Start()
    {
        spawnPipe();
    }

    // Update is called once per frame
    void Update()
    {
        if (timer < spawnRate)
        {
            timer += Time.deltaTime;
        }
        else
        {
            spawnPipe();
            timer = 0;
        }

        Instantiate(pipe, transform.position, transform.rotation)
    }

    void spawnPipe()
    {
        instantiate (pipe, transform.position, transform.rotation);
    }
    // keepiong track of dept with the Z value
}